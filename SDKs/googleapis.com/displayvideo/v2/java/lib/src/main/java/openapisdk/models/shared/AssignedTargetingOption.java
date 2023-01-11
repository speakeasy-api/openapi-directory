package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignedTargetingOption
 * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
**/
public class AssignedTargetingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRangeDetails")
    public AgeRangeAssignedTargetingOptionDetails ageRangeDetails;
    public AssignedTargetingOption withAgeRangeDetails(AgeRangeAssignedTargetingOptionDetails ageRangeDetails) {
        this.ageRangeDetails = ageRangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appCategoryDetails")
    public AppCategoryAssignedTargetingOptionDetails appCategoryDetails;
    public AssignedTargetingOption withAppCategoryDetails(AppCategoryAssignedTargetingOptionDetails appCategoryDetails) {
        this.appCategoryDetails = appCategoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appDetails")
    public AppAssignedTargetingOptionDetails appDetails;
    public AssignedTargetingOption withAppDetails(AppAssignedTargetingOptionDetails appDetails) {
        this.appDetails = appDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public AssignedTargetingOption withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedTargetingOptionIdAlias")
    public String assignedTargetingOptionIdAlias;
    public AssignedTargetingOption withAssignedTargetingOptionIdAlias(String assignedTargetingOptionIdAlias) {
        this.assignedTargetingOptionIdAlias = assignedTargetingOptionIdAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceGroupDetails")
    public AudienceGroupAssignedTargetingOptionDetails audienceGroupDetails;
    public AssignedTargetingOption withAudienceGroupDetails(AudienceGroupAssignedTargetingOptionDetails audienceGroupDetails) {
        this.audienceGroupDetails = audienceGroupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioContentTypeDetails")
    public AudioContentTypeAssignedTargetingOptionDetails audioContentTypeDetails;
    public AssignedTargetingOption withAudioContentTypeDetails(AudioContentTypeAssignedTargetingOptionDetails audioContentTypeDetails) {
        this.audioContentTypeDetails = audioContentTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedSellerStatusDetails")
    public AuthorizedSellerStatusAssignedTargetingOptionDetails authorizedSellerStatusDetails;
    public AssignedTargetingOption withAuthorizedSellerStatusDetails(AuthorizedSellerStatusAssignedTargetingOptionDetails authorizedSellerStatusDetails) {
        this.authorizedSellerStatusDetails = authorizedSellerStatusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserDetails")
    public BrowserAssignedTargetingOptionDetails browserDetails;
    public AssignedTargetingOption withBrowserDetails(BrowserAssignedTargetingOptionDetails browserDetails) {
        this.browserDetails = browserDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessChainDetails")
    public BusinessChainAssignedTargetingOptionDetails businessChainDetails;
    public AssignedTargetingOption withBusinessChainDetails(BusinessChainAssignedTargetingOptionDetails businessChainDetails) {
        this.businessChainDetails = businessChainDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierAndIspDetails")
    public CarrierAndIspAssignedTargetingOptionDetails carrierAndIspDetails;
    public AssignedTargetingOption withCarrierAndIspDetails(CarrierAndIspAssignedTargetingOptionDetails carrierAndIspDetails) {
        this.carrierAndIspDetails = carrierAndIspDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryDetails")
    public CategoryAssignedTargetingOptionDetails categoryDetails;
    public AssignedTargetingOption withCategoryDetails(CategoryAssignedTargetingOptionDetails categoryDetails) {
        this.categoryDetails = categoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelDetails")
    public ChannelAssignedTargetingOptionDetails channelDetails;
    public AssignedTargetingOption withChannelDetails(ChannelAssignedTargetingOptionDetails channelDetails) {
        this.channelDetails = channelDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDurationDetails")
    public ContentDurationAssignedTargetingOptionDetails contentDurationDetails;
    public AssignedTargetingOption withContentDurationDetails(ContentDurationAssignedTargetingOptionDetails contentDurationDetails) {
        this.contentDurationDetails = contentDurationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentGenreDetails")
    public ContentGenreAssignedTargetingOptionDetails contentGenreDetails;
    public AssignedTargetingOption withContentGenreDetails(ContentGenreAssignedTargetingOptionDetails contentGenreDetails) {
        this.contentGenreDetails = contentGenreDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentInstreamPositionDetails")
    public ContentInstreamPositionAssignedTargetingOptionDetails contentInstreamPositionDetails;
    public AssignedTargetingOption withContentInstreamPositionDetails(ContentInstreamPositionAssignedTargetingOptionDetails contentInstreamPositionDetails) {
        this.contentInstreamPositionDetails = contentInstreamPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOutstreamPositionDetails")
    public ContentOutstreamPositionAssignedTargetingOptionDetails contentOutstreamPositionDetails;
    public AssignedTargetingOption withContentOutstreamPositionDetails(ContentOutstreamPositionAssignedTargetingOptionDetails contentOutstreamPositionDetails) {
        this.contentOutstreamPositionDetails = contentOutstreamPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentStreamTypeDetails")
    public ContentStreamTypeAssignedTargetingOptionDetails contentStreamTypeDetails;
    public AssignedTargetingOption withContentStreamTypeDetails(ContentStreamTypeAssignedTargetingOptionDetails contentStreamTypeDetails) {
        this.contentStreamTypeDetails = contentStreamTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayAndTimeDetails")
    public DayAndTimeAssignedTargetingOptionDetails dayAndTimeDetails;
    public AssignedTargetingOption withDayAndTimeDetails(DayAndTimeAssignedTargetingOptionDetails dayAndTimeDetails) {
        this.dayAndTimeDetails = dayAndTimeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMakeModelDetails")
    public DeviceMakeModelAssignedTargetingOptionDetails deviceMakeModelDetails;
    public AssignedTargetingOption withDeviceMakeModelDetails(DeviceMakeModelAssignedTargetingOptionDetails deviceMakeModelDetails) {
        this.deviceMakeModelDetails = deviceMakeModelDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTypeDetails")
    public DeviceTypeAssignedTargetingOptionDetails deviceTypeDetails;
    public AssignedTargetingOption withDeviceTypeDetails(DeviceTypeAssignedTargetingOptionDetails deviceTypeDetails) {
        this.deviceTypeDetails = deviceTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digitalContentLabelExclusionDetails")
    public DigitalContentLabelAssignedTargetingOptionDetails digitalContentLabelExclusionDetails;
    public AssignedTargetingOption withDigitalContentLabelExclusionDetails(DigitalContentLabelAssignedTargetingOptionDetails digitalContentLabelExclusionDetails) {
        this.digitalContentLabelExclusionDetails = digitalContentLabelExclusionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentDetails")
    public EnvironmentAssignedTargetingOptionDetails environmentDetails;
    public AssignedTargetingOption withEnvironmentDetails(EnvironmentAssignedTargetingOptionDetails environmentDetails) {
        this.environmentDetails = environmentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeDetails")
    public ExchangeAssignedTargetingOptionDetails exchangeDetails;
    public AssignedTargetingOption withExchangeDetails(ExchangeAssignedTargetingOptionDetails exchangeDetails) {
        this.exchangeDetails = exchangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genderDetails")
    public GenderAssignedTargetingOptionDetails genderDetails;
    public AssignedTargetingOption withGenderDetails(GenderAssignedTargetingOptionDetails genderDetails) {
        this.genderDetails = genderDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegionDetails")
    public GeoRegionAssignedTargetingOptionDetails geoRegionDetails;
    public AssignedTargetingOption withGeoRegionDetails(GeoRegionAssignedTargetingOptionDetails geoRegionDetails) {
        this.geoRegionDetails = geoRegionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("householdIncomeDetails")
    public HouseholdIncomeAssignedTargetingOptionDetails householdIncomeDetails;
    public AssignedTargetingOption withHouseholdIncomeDetails(HouseholdIncomeAssignedTargetingOptionDetails householdIncomeDetails) {
        this.householdIncomeDetails = householdIncomeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritance")
    public AssignedTargetingOptionInheritanceEnum inheritance;
    public AssignedTargetingOption withInheritance(AssignedTargetingOptionInheritanceEnum inheritance) {
        this.inheritance = inheritance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceDetails")
    public InventorySourceAssignedTargetingOptionDetails inventorySourceDetails;
    public AssignedTargetingOption withInventorySourceDetails(InventorySourceAssignedTargetingOptionDetails inventorySourceDetails) {
        this.inventorySourceDetails = inventorySourceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceGroupDetails")
    public InventorySourceGroupAssignedTargetingOptionDetails inventorySourceGroupDetails;
    public AssignedTargetingOption withInventorySourceGroupDetails(InventorySourceGroupAssignedTargetingOptionDetails inventorySourceGroupDetails) {
        this.inventorySourceGroupDetails = inventorySourceGroupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordDetails")
    public KeywordAssignedTargetingOptionDetails keywordDetails;
    public AssignedTargetingOption withKeywordDetails(KeywordAssignedTargetingOptionDetails keywordDetails) {
        this.keywordDetails = keywordDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageDetails")
    public LanguageAssignedTargetingOptionDetails languageDetails;
    public AssignedTargetingOption withLanguageDetails(LanguageAssignedTargetingOptionDetails languageDetails) {
        this.languageDetails = languageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssignedTargetingOption withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativeContentPositionDetails")
    public NativeContentPositionAssignedTargetingOptionDetails nativeContentPositionDetails;
    public AssignedTargetingOption withNativeContentPositionDetails(NativeContentPositionAssignedTargetingOptionDetails nativeContentPositionDetails) {
        this.nativeContentPositionDetails = nativeContentPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywordListDetails")
    public NegativeKeywordListAssignedTargetingOptionDetails negativeKeywordListDetails;
    public AssignedTargetingOption withNegativeKeywordListDetails(NegativeKeywordListAssignedTargetingOptionDetails negativeKeywordListDetails) {
        this.negativeKeywordListDetails = negativeKeywordListDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omidDetails")
    public OmidAssignedTargetingOptionDetails omidDetails;
    public AssignedTargetingOption withOmidDetails(OmidAssignedTargetingOptionDetails omidDetails) {
        this.omidDetails = omidDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onScreenPositionDetails")
    public OnScreenPositionAssignedTargetingOptionDetails onScreenPositionDetails;
    public AssignedTargetingOption withOnScreenPositionDetails(OnScreenPositionAssignedTargetingOptionDetails onScreenPositionDetails) {
        this.onScreenPositionDetails = onScreenPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemDetails")
    public OperatingSystemAssignedTargetingOptionDetails operatingSystemDetails;
    public AssignedTargetingOption withOperatingSystemDetails(OperatingSystemAssignedTargetingOptionDetails operatingSystemDetails) {
        this.operatingSystemDetails = operatingSystemDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentalStatusDetails")
    public ParentalStatusAssignedTargetingOptionDetails parentalStatusDetails;
    public AssignedTargetingOption withParentalStatusDetails(ParentalStatusAssignedTargetingOptionDetails parentalStatusDetails) {
        this.parentalStatusDetails = parentalStatusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiDetails")
    public PoiAssignedTargetingOptionDetails poiDetails;
    public AssignedTargetingOption withPoiDetails(PoiAssignedTargetingOptionDetails poiDetails) {
        this.poiDetails = poiDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityLocationListDetails")
    public ProximityLocationListAssignedTargetingOptionDetails proximityLocationListDetails;
    public AssignedTargetingOption withProximityLocationListDetails(ProximityLocationListAssignedTargetingOptionDetails proximityLocationListDetails) {
        this.proximityLocationListDetails = proximityLocationListDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalLocationListDetails")
    public RegionalLocationListAssignedTargetingOptionDetails regionalLocationListDetails;
    public AssignedTargetingOption withRegionalLocationListDetails(RegionalLocationListAssignedTargetingOptionDetails regionalLocationListDetails) {
        this.regionalLocationListDetails = regionalLocationListDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveCategoryExclusionDetails")
    public SensitiveCategoryAssignedTargetingOptionDetails sensitiveCategoryExclusionDetails;
    public AssignedTargetingOption withSensitiveCategoryExclusionDetails(SensitiveCategoryAssignedTargetingOptionDetails sensitiveCategoryExclusionDetails) {
        this.sensitiveCategoryExclusionDetails = sensitiveCategoryExclusionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subExchangeDetails")
    public SubExchangeAssignedTargetingOptionDetails subExchangeDetails;
    public AssignedTargetingOption withSubExchangeDetails(SubExchangeAssignedTargetingOptionDetails subExchangeDetails) {
        this.subExchangeDetails = subExchangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingType")
    public AssignedTargetingOptionTargetingTypeEnum targetingType;
    public AssignedTargetingOption withTargetingType(AssignedTargetingOptionTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyVerifierDetails")
    public ThirdPartyVerifierAssignedTargetingOptionDetails thirdPartyVerifierDetails;
    public AssignedTargetingOption withThirdPartyVerifierDetails(ThirdPartyVerifierAssignedTargetingOptionDetails thirdPartyVerifierDetails) {
        this.thirdPartyVerifierDetails = thirdPartyVerifierDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlDetails")
    public UrlAssignedTargetingOptionDetails urlDetails;
    public AssignedTargetingOption withUrlDetails(UrlAssignedTargetingOptionDetails urlDetails) {
        this.urlDetails = urlDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRewardedContentDetails")
    public UserRewardedContentAssignedTargetingOptionDetails userRewardedContentDetails;
    public AssignedTargetingOption withUserRewardedContentDetails(UserRewardedContentAssignedTargetingOptionDetails userRewardedContentDetails) {
        this.userRewardedContentDetails = userRewardedContentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoPlayerSizeDetails")
    public VideoPlayerSizeAssignedTargetingOptionDetails videoPlayerSizeDetails;
    public AssignedTargetingOption withVideoPlayerSizeDetails(VideoPlayerSizeAssignedTargetingOptionDetails videoPlayerSizeDetails) {
        this.videoPlayerSizeDetails = videoPlayerSizeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewabilityDetails")
    public ViewabilityAssignedTargetingOptionDetails viewabilityDetails;
    public AssignedTargetingOption withViewabilityDetails(ViewabilityAssignedTargetingOptionDetails viewabilityDetails) {
        this.viewabilityDetails = viewabilityDetails;
        return this;
    }
}