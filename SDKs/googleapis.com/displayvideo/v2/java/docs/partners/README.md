# partners

### Available Operations

* [displayvideoPartnersChannelsCreate](#displayvideopartnerschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [displayvideoPartnersChannelsList](#displayvideopartnerschannelslist) - Lists channels for a partner or advertiser.
* [displayvideoPartnersChannelsPatch](#displayvideopartnerschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [displayvideoPartnersChannelsSitesBulkEdit](#displayvideopartnerschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [displayvideoPartnersChannelsSitesDelete](#displayvideopartnerschannelssitesdelete) - Deletes a site from a channel.
* [displayvideoPartnersChannelsSitesList](#displayvideopartnerschannelssiteslist) - Lists sites in a channel.
* [displayvideoPartnersChannelsSitesReplace](#displayvideopartnerschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [displayvideoPartnersEditAssignedTargetingOptions](#displayvideopartnerseditassignedtargetingoptions) - Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* [displayvideoPartnersGet](#displayvideopartnersget) - Gets a partner.
* [displayvideoPartnersList](#displayvideopartnerslist) - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate](#displayvideopartnerstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete](#displayvideopartnerstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet](#displayvideopartnerstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsList](#displayvideopartnerstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a partner.

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

            DisplayvideoPartnersChannelsCreateRequest req = new DisplayvideoPartnersChannelsCreateRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                channelInput = new ChannelInput() {{
                    advertiserId = "natus";
                    displayName = "voluptatem";
                    partnerId = "tempora";
                }};;
                accessToken = "occaecati";
                advertiserId = "quasi";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "doloremque";
                key = "quas";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "esse";
                uploadProtocol = "quas";
            }};            

            DisplayvideoPartnersChannelsCreateResponse res = sdk.partners.displayvideoPartnersChannelsCreate(req, new DisplayvideoPartnersChannelsCreateSecurity("blanditiis", "laudantium") {{
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

            DisplayvideoPartnersChannelsListRequest req = new DisplayvideoPartnersChannelsListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "autem";
                advertiserId = "vel";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "consectetur";
                filter = "soluta";
                key = "tenetur";
                oauthToken = "necessitatibus";
                orderBy = "perspiciatis";
                pageSize = 380034L;
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "debitis";
                uploadProtocol = "quidem";
            }};            

            DisplayvideoPartnersChannelsListResponse res = sdk.partners.displayvideoPartnersChannelsList(req, new DisplayvideoPartnersChannelsListSecurity("magnam", "doloremque") {{
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

            DisplayvideoPartnersChannelsPatchRequest req = new DisplayvideoPartnersChannelsPatchRequest("accusamus", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                channelInput = new ChannelInput() {{
                    advertiserId = "voluptas";
                    displayName = "earum";
                    partnerId = "est";
                }};;
                accessToken = "earum";
                advertiserId = "nihil";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "perferendis";
                key = "nam";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "ratione";
                updateMask = "eos";
                uploadType = "id";
                uploadProtocol = "modi";
            }};            

            DisplayvideoPartnersChannelsPatchResponse res = sdk.partners.displayvideoPartnersChannelsPatch(req, new DisplayvideoPartnersChannelsPatchSecurity("illum", "error") {{
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

            DisplayvideoPartnersChannelsSitesBulkEditRequest req = new DisplayvideoPartnersChannelsSitesBulkEditRequest("consectetur", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkEditSitesRequestInput = new BulkEditSitesRequestInput() {{
                    advertiserId = "cum";
                    createdSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "culpa";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "a";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "magnam";
                        }}),
                    }};
                    deletedSites = new String[]{{
                        add("ad"),
                        add("quia"),
                    }};
                    partnerId = "quod";
                }};;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "explicabo";
                key = "eligendi";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "odit";
                uploadProtocol = "est";
            }};            

            DisplayvideoPartnersChannelsSitesBulkEditResponse res = sdk.partners.displayvideoPartnersChannelsSitesBulkEdit(req, new DisplayvideoPartnersChannelsSitesBulkEditSecurity("at", "ipsum") {{
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

            DisplayvideoPartnersChannelsSitesDeleteRequest req = new DisplayvideoPartnersChannelsSitesDeleteRequest("explicabo", "nulla", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                advertiserId = "voluptatum";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "voluptatum";
                key = "blanditiis";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "incidunt";
                uploadProtocol = "labore";
            }};            

            DisplayvideoPartnersChannelsSitesDeleteResponse res = sdk.partners.displayvideoPartnersChannelsSitesDelete(req, new DisplayvideoPartnersChannelsSitesDeleteSecurity("ut", "enim") {{
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

            DisplayvideoPartnersChannelsSitesListRequest req = new DisplayvideoPartnersChannelsSitesListRequest("nihil", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                advertiserId = "quod";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "quam";
                filter = "consectetur";
                key = "nemo";
                oauthToken = "nesciunt";
                orderBy = "earum";
                pageSize = 429725L;
                pageToken = "dolor";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "quos";
                uploadProtocol = "sed";
            }};            

            DisplayvideoPartnersChannelsSitesListResponse res = sdk.partners.displayvideoPartnersChannelsSitesList(req, new DisplayvideoPartnersChannelsSitesListSecurity("eaque", "natus") {{
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

            DisplayvideoPartnersChannelsSitesReplaceRequest req = new DisplayvideoPartnersChannelsSitesReplaceRequest("ratione", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                replaceSitesRequestInput = new ReplaceSitesRequestInput() {{
                    advertiserId = "deserunt";
                    newSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "ex";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "occaecati";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "optio";
                        }}),
                    }};
                    partnerId = "at";
                }};;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "cumque";
                key = "sapiente";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "repellendus";
                uploadProtocol = "culpa";
            }};            

            DisplayvideoPartnersChannelsSitesReplaceResponse res = sdk.partners.displayvideoPartnersChannelsSitesReplace(req, new DisplayvideoPartnersChannelsSitesReplaceSecurity("dicta", "rem") {{
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

## displayvideoPartnersEditAssignedTargetingOptions

Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsSecurity;
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

            DisplayvideoPartnersEditAssignedTargetingOptionsRequest req = new DisplayvideoPartnersEditAssignedTargetingOptionsRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditPartnerAssignedTargetingOptionsRequestInput = new BulkEditPartnerAssignedTargetingOptionsRequestInput() {{
                    createRequests = new org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput[]{{
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE3544;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "harum";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "voluptatibus";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_APPLE_TV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quos";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "aliquam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "praesentium";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "eum";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "animi";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "libero";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ullam";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "quaerat";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "maiores";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ipsam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "odio";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "inventore";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "occaecati";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "rem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "nihil";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aut";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "rerum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quod";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dolore";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "alias";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "modi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "et";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "molestiae";
                                                }}),
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
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nostrum";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ex";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 2291.97;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "molestias";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ipsum";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "hic";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quidem";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "odit";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_INTERSTITIAL;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quia";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                        endHour = 988407;
                                        startHour = 507635;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "consequuntur";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_COMPUTER;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_GENERAL;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_INMOBI;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vel";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "maxime";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "vel";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "distinctio";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cupiditate";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_RECOMMENDATION;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "quis";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "iusto";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quod";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNKNOWN;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3229.07;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "nostrum";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "minus";
                                        proximityRadius = 4005.1;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "ea";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_GAMBLING;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "fuga";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALTERNATIVE_LIFESTYLES),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ADULT_CONTENT_SWIMSUIT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NON_ENGLISH),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NON_ENGLISH),
                                                }};
                                            }};
                                            customSegmentId = "distinctio";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE75_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION_UNSPECIFIED;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY50_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE20_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("impedit"),
                                                add("omnis"),
                                                add("et"),
                                                add("earum"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ1000;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "minus";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "labore";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_LARGE;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY10_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "veniam";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "sed";
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_CONTENT_STREAM_TYPE;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE1820;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "reprehenderit";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "et";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_GENERIC_CTV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "hic";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "perferendis";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "aut";
                                                }}),
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
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "in";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "doloribus";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 6607.99;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "cumque";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "odio";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "atque";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "similique";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quia";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "architecto";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_INTERSTITIAL;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "illo";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 689301;
                                        startHour = 675689;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "repudiandae";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_TEENS;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_ADMETA;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_FEMALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "veritatis";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_LOWER50_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "excepturi";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "atque";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "dicta";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "magnam";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "cum";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "eius";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "maiores";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNKNOWN;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 5497.1;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "officiis";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "ab";
                                        proximityRadius = 4528.56;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "itaque";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "dolor";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SEX_EDUCATION),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                                }};
                                            }};
                                            customSegmentId = "ea";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE65_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X300_UNSPECIFIED;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY55_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("temporibus"),
                                                add("porro"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ700;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "tenetur";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "assumenda";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_SMALL;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY90_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "tempore";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "laboriosam";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE5559;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "occaecati";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "dicta";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "laborum";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "a";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "labore";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "aliquid";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "repudiandae";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "quod";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "neque";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "repellendus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aut";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "amet";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "sint";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "voluptates";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "nihil";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ad";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_BROADCAST;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "fuga";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "consequatur";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 264.93;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "earum";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quis";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolorem";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "omnis";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "sed";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quo";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "est";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.MONDAY;
                                        endHour = 332237;
                                        startHour = 665082;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cum";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_TEENS;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_RESET_DIGITAL;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_FEMALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ducimus";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_LOWER50_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "aspernatur";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "molestias";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "fuga";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "at";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "laborum";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "hic";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "corrupti";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 9390.96;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "explicabo";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "odit";
                                        proximityRadius = 731.97;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "quia";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_VIOLENCE;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "ullam";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE1_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALTERNATIVE_LIFESTYLES),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NEGATIVE_NEWS_FINANCIAL),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                                }};
                                            }};
                                            customSegmentId = "magni";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE75_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY55_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE40_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("quam"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY_UNSPECIFIED;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "quia";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quis";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY10_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "dicta";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "eum";
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_NEGATIVE_KEYWORD_LIST;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE4044;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quasi";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "itaque";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ROKU;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "temporibus";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "aspernatur";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "neque";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "impedit";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "neque";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "amet";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "labore";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "repellat";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "eos";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "mollitia";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "officia";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "perspiciatis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "a";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "recusandae";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aspernatur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "et";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "et";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "sunt";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "architecto";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptatem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "error";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "nesciunt";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "unde";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "modi";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "adipisci";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "praesentium";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nemo";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 2916.49;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "dolor";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "perspiciatis";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "accusamus";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "voluptates";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quia";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "aspernatur";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNKNOWN;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "laboriosam";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                        endHour = 273638;
                                        startHour = 302228;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "expedita";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_UNSPECIFIED;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_KARGO;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quos";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP31_TO40_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "quisquam";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "sunt";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "asperiores";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "corporis";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_ARTICLE;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "accusamus";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ipsam";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "at";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4685.79;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "dolorem";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "odit";
                                        proximityRadius = 8894.71;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "libero";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_SHOCKING;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "et";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.GAMBLING),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                }};
                                            }};
                                            customSegmentId = "doloribus";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE_UNSPECIFIED;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION_UNSPECIFIED;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD6;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY40_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE30_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("alias"),
                                                add("iure"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ875;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "vitae";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "delectus";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "at";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "magnam";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE5054;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sed";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "mollitia";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID_TV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "doloribus";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "minima";
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
                                                    googleAudienceId = "quis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "fugiat";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "dignissimos";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "consectetur";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "quos";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "repudiandae";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ducimus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "consectetur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "provident";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "impedit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "cumque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "praesentium";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "doloremque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "impedit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ullam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "perferendis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "molestiae";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "nesciunt";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quas";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNSPECIFIED;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "aperiam";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "itaque";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3103.8;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "necessitatibus";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "tempora";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quaerat";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "magnam";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "voluptate";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "magni";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_ARTICLE;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "cumque";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SATURDAY;
                                        endHour = 248131;
                                        startHour = 701506;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "illum";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_UNRATED;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_TABOOLA;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "repudiandae";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_UNKNOWN;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "ut";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "nihil";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "harum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptate";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_ARTICLE;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "blanditiis";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "repudiandae";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "reiciendis";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNKNOWN;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3486.33;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "beatae";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "qui";
                                        proximityRadius = 3885.89;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_KILOMETERS;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "in";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_ADULT;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SEX_EDUCATION),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.CELEBRITY_GOSSIP),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                }};
                                            }};
                                            customSegmentId = "ut";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE75_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD4;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X300_UNSPECIFIED;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY50_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE35_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("veritatis"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY40;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ875;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "accusantium";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "dicta";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY20_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "occaecati";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "quos";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNKNOWN;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sequi";
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
                                                    firstAndThirdPartyAudienceId = "et";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "aliquid";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ab";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "porro";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "explicabo";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "reiciendis";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "dicta";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "porro";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "tempore";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ullam";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "sunt";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "id";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "et";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "reiciendis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "iste";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quidem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "iure";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ipsam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "commodi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "debitis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "esse";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "porro";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "mollitia";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "delectus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "suscipit";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "mollitia";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ipsam";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7817.77;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "inventore";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vel";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "modi";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "dicta";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "provident";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "non";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_FEED;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "occaecati";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                        endHour = 993395;
                                        startHour = 133887;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sit";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_CONNECTED_TV;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_FAMILIES;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_TVN;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "magni";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "cumque";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "explicabo";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "delectus";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "natus";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_RECOMMENDATION;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "fugit";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "vitae";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "consequatur";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 5890.14;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "numquam";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "tempore";
                                        proximityRadius = 5646.47;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "enim";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "adipisci";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE1_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.PARKING_PAGE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.OCCULT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALCOHOL),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.INFLAMMATORY_POLITICS_AND_NEWS),
                                                }};
                                            }};
                                            customSegmentId = "optio";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE50_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD25;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY65_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE20_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("excepturi"),
                                                add("eos"),
                                                add("odit"),
                                                add("quia"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ750;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "sapiente";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "laborum";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY80_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "odio";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "eum";
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_URL;
                        }}),
                    }};
                    deleteRequests = new org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest[]{{
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("quo"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_LANGUAGE;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("pariatur"),
                                add("labore"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_AUDIENCE_GROUP;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("vero"),
                                add("reiciendis"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_DAY_AND_TIME;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("adipisci"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_APP;
                        }}),
                    }};
                }};;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "perspiciatis";
                key = "omnis";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "minus";
                uploadProtocol = "explicabo";
            }};            

            DisplayvideoPartnersEditAssignedTargetingOptionsResponse res = sdk.partners.displayvideoPartnersEditAssignedTargetingOptions(req, new DisplayvideoPartnersEditAssignedTargetingOptionsSecurity("accusantium", "ipsa") {{
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

            DisplayvideoPartnersGetRequest req = new DisplayvideoPartnersGetRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "illum";
                key = "veniam";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "alias";
            }};            

            DisplayvideoPartnersGetResponse res = sdk.partners.displayvideoPartnersGet(req, new DisplayvideoPartnersGetSecurity("nemo", "molestias") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "ut";
                filter = "possimus";
                key = "nihil";
                oauthToken = "voluptas";
                orderBy = "facere";
                pageSize = 607937L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "reiciendis";
                uploadProtocol = "cumque";
            }};            

            DisplayvideoPartnersListResponse res = sdk.partners.displayvideoPartnersList(req, new DisplayvideoPartnersListSecurity("atque", "explicabo") {{
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

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest("sit", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum.TARGETING_TYPE_SUB_EXCHANGE) {{
                dollarXgafv = XgafvEnum.ONE;
                assignedTargetingOptionInput = new AssignedTargetingOptionInput() {{
                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE5564;
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
                    }};;
                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "ex";
                    }};;
                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "quaerat";
                    }};;
                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 3967.67;
                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                        targetingOptionId = "quaerat";
                    }};;
                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "enim";
                    }};;
                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "cumque";
                    }};;
                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                        channelId = "ab";
                        negative = false;
                    }};;
                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "quibusdam";
                    }};;
                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "blanditiis";
                    }};;
                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                    }};;
                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_INTERSTITIAL;
                    }};;
                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "explicabo";
                    }};;
                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                        endHour = 18285;
                        startHour = 300032;
                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                    }};;
                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "sapiente";
                    }};;
                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_COMPUTER;
                    }};;
                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_GENERAL;
                    }};;
                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                    }};;
                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_TRITON;
                    }};;
                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                    }};;
                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "culpa";
                    }};;
                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                    }};;
                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                        inventorySourceId = "a";
                    }};;
                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                        inventorySourceGroupId = "consequatur";
                    }};;
                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                        keyword = "voluptates";
                        negative = false;
                    }};;
                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "dolorum";
                    }};;
                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                    }};;
                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                        negativeKeywordListId = "eos";
                    }};;
                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                    }};;
                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "vel";
                    }};;
                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "placeat";
                    }};;
                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                    }};;
                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 9049.44;
                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "dignissimos";
                    }};;
                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                        proximityLocationListId = "veritatis";
                        proximityRadius = 6907.61;
                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_KILOMETERS;
                    }};;
                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                        negative = false;
                        regionalLocationListId = "ab";
                    }};;
                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_PROFANITY;
                    }};;
                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                    }};;
                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "officiis";
                    }};;
                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                        adloox = new Adloox() {{
                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                            }};
                        }};;
                        doubleVerify = new DoubleVerify() {{
                            appStarRating = new DoubleVerifyAppStarRating() {{
                                avoidInsufficientStarRating = false;
                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_LESS;
                            }};;
                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                            }};
                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                avoidUnknownBrandSafetyCategory = false;
                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                }};
                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALTERNATIVE_LIFESTYLES),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.OCCULT),
                                }};
                            }};;
                            customSegmentId = "quam";
                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE40_PERCENT_HIGHER;
                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION_UNSPECIFIED;
                            }};;
                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                avoidInsufficientOption = false;
                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                            }};;
                            videoViewability = new DoubleVerifyVideoViewability() {{
                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY75_PERCENT_HIGHER;
                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIDEO_VIEWABLE_RATE_UNSPECIFIED;
                            }};;
                        }};;
                        integralAdScience = new IntegralAdScience() {{
                            customSegmentId = new String[]{{
                                add("incidunt"),
                                add("iusto"),
                                add("laborum"),
                            }};
                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                            excludeUnrateable = false;
                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ750;
                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY70;
                        }};;
                    }};;
                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                        negative = false;
                        url = "earum";
                    }};;
                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "debitis";
                    }};;
                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_HD;
                    }};;
                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY90_PERCENT_OR_MORE;
                    }};;
                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                        channelId = "ex";
                        negative = false;
                    }};;
                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                        negative = false;
                        videoId = "tempore";
                    }};;
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "soluta";
                fields = "maxime";
                key = "commodi";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "nisi";
                uploadProtocol = "aspernatur";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity("eveniet", "tempore") {{
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

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest("asperiores", "temporibus", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum.TARGETING_TYPE_YOUTUBE_CHANNEL) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "iste";
                key = "labore";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "ea";
                uploadProtocol = "consequatur";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity("nobis", "accusantium") {{
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

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest("ea", "laborum", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_URL) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "autem";
                key = "numquam";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "earum";
                uploadProtocol = "suscipit";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity("assumenda", "doloremque") {{
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

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest("porro", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_HOUSEHOLD_INCOME) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "excepturi";
                filter = "quod";
                key = "in";
                oauthToken = "nesciunt";
                orderBy = "temporibus";
                pageSize = 839030L;
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "ut";
                uploadProtocol = "nostrum";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity("dignissimos", "illo") {{
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
