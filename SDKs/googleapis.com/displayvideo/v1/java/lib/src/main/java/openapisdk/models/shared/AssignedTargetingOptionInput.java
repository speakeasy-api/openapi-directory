package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignedTargetingOptionInput
 * A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.
**/
public class AssignedTargetingOptionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRangeDetails")
    public AgeRangeAssignedTargetingOptionDetails ageRangeDetails;
    public AssignedTargetingOptionInput withAgeRangeDetails(AgeRangeAssignedTargetingOptionDetails ageRangeDetails) {
        this.ageRangeDetails = ageRangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appCategoryDetails")
    public AppCategoryAssignedTargetingOptionDetailsInput appCategoryDetails;
    public AssignedTargetingOptionInput withAppCategoryDetails(AppCategoryAssignedTargetingOptionDetailsInput appCategoryDetails) {
        this.appCategoryDetails = appCategoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appDetails")
    public AppAssignedTargetingOptionDetailsInput appDetails;
    public AssignedTargetingOptionInput withAppDetails(AppAssignedTargetingOptionDetailsInput appDetails) {
        this.appDetails = appDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceGroupDetails")
    public AudienceGroupAssignedTargetingOptionDetails audienceGroupDetails;
    public AssignedTargetingOptionInput withAudienceGroupDetails(AudienceGroupAssignedTargetingOptionDetails audienceGroupDetails) {
        this.audienceGroupDetails = audienceGroupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioContentTypeDetails")
    public AudioContentTypeAssignedTargetingOptionDetails audioContentTypeDetails;
    public AssignedTargetingOptionInput withAudioContentTypeDetails(AudioContentTypeAssignedTargetingOptionDetails audioContentTypeDetails) {
        this.audioContentTypeDetails = audioContentTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedSellerStatusDetails")
    public AuthorizedSellerStatusAssignedTargetingOptionDetailsInput authorizedSellerStatusDetails;
    public AssignedTargetingOptionInput withAuthorizedSellerStatusDetails(AuthorizedSellerStatusAssignedTargetingOptionDetailsInput authorizedSellerStatusDetails) {
        this.authorizedSellerStatusDetails = authorizedSellerStatusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserDetails")
    public BrowserAssignedTargetingOptionDetailsInput browserDetails;
    public AssignedTargetingOptionInput withBrowserDetails(BrowserAssignedTargetingOptionDetailsInput browserDetails) {
        this.browserDetails = browserDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessChainDetails")
    public BusinessChainAssignedTargetingOptionDetailsInput businessChainDetails;
    public AssignedTargetingOptionInput withBusinessChainDetails(BusinessChainAssignedTargetingOptionDetailsInput businessChainDetails) {
        this.businessChainDetails = businessChainDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierAndIspDetails")
    public CarrierAndIspAssignedTargetingOptionDetailsInput carrierAndIspDetails;
    public AssignedTargetingOptionInput withCarrierAndIspDetails(CarrierAndIspAssignedTargetingOptionDetailsInput carrierAndIspDetails) {
        this.carrierAndIspDetails = carrierAndIspDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryDetails")
    public CategoryAssignedTargetingOptionDetailsInput categoryDetails;
    public AssignedTargetingOptionInput withCategoryDetails(CategoryAssignedTargetingOptionDetailsInput categoryDetails) {
        this.categoryDetails = categoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelDetails")
    public ChannelAssignedTargetingOptionDetails channelDetails;
    public AssignedTargetingOptionInput withChannelDetails(ChannelAssignedTargetingOptionDetails channelDetails) {
        this.channelDetails = channelDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDurationDetails")
    public ContentDurationAssignedTargetingOptionDetailsInput contentDurationDetails;
    public AssignedTargetingOptionInput withContentDurationDetails(ContentDurationAssignedTargetingOptionDetailsInput contentDurationDetails) {
        this.contentDurationDetails = contentDurationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentGenreDetails")
    public ContentGenreAssignedTargetingOptionDetailsInput contentGenreDetails;
    public AssignedTargetingOptionInput withContentGenreDetails(ContentGenreAssignedTargetingOptionDetailsInput contentGenreDetails) {
        this.contentGenreDetails = contentGenreDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentInstreamPositionDetails")
    public ContentInstreamPositionAssignedTargetingOptionDetailsInput contentInstreamPositionDetails;
    public AssignedTargetingOptionInput withContentInstreamPositionDetails(ContentInstreamPositionAssignedTargetingOptionDetailsInput contentInstreamPositionDetails) {
        this.contentInstreamPositionDetails = contentInstreamPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOutstreamPositionDetails")
    public ContentOutstreamPositionAssignedTargetingOptionDetailsInput contentOutstreamPositionDetails;
    public AssignedTargetingOptionInput withContentOutstreamPositionDetails(ContentOutstreamPositionAssignedTargetingOptionDetailsInput contentOutstreamPositionDetails) {
        this.contentOutstreamPositionDetails = contentOutstreamPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentStreamTypeDetails")
    public ContentStreamTypeAssignedTargetingOptionDetailsInput contentStreamTypeDetails;
    public AssignedTargetingOptionInput withContentStreamTypeDetails(ContentStreamTypeAssignedTargetingOptionDetailsInput contentStreamTypeDetails) {
        this.contentStreamTypeDetails = contentStreamTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayAndTimeDetails")
    public DayAndTimeAssignedTargetingOptionDetails dayAndTimeDetails;
    public AssignedTargetingOptionInput withDayAndTimeDetails(DayAndTimeAssignedTargetingOptionDetails dayAndTimeDetails) {
        this.dayAndTimeDetails = dayAndTimeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMakeModelDetails")
    public DeviceMakeModelAssignedTargetingOptionDetailsInput deviceMakeModelDetails;
    public AssignedTargetingOptionInput withDeviceMakeModelDetails(DeviceMakeModelAssignedTargetingOptionDetailsInput deviceMakeModelDetails) {
        this.deviceMakeModelDetails = deviceMakeModelDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTypeDetails")
    public DeviceTypeAssignedTargetingOptionDetails deviceTypeDetails;
    public AssignedTargetingOptionInput withDeviceTypeDetails(DeviceTypeAssignedTargetingOptionDetails deviceTypeDetails) {
        this.deviceTypeDetails = deviceTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digitalContentLabelExclusionDetails")
    public DigitalContentLabelAssignedTargetingOptionDetailsInput digitalContentLabelExclusionDetails;
    public AssignedTargetingOptionInput withDigitalContentLabelExclusionDetails(DigitalContentLabelAssignedTargetingOptionDetailsInput digitalContentLabelExclusionDetails) {
        this.digitalContentLabelExclusionDetails = digitalContentLabelExclusionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentDetails")
    public EnvironmentAssignedTargetingOptionDetails environmentDetails;
    public AssignedTargetingOptionInput withEnvironmentDetails(EnvironmentAssignedTargetingOptionDetails environmentDetails) {
        this.environmentDetails = environmentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeDetails")
    public ExchangeAssignedTargetingOptionDetails exchangeDetails;
    public AssignedTargetingOptionInput withExchangeDetails(ExchangeAssignedTargetingOptionDetails exchangeDetails) {
        this.exchangeDetails = exchangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genderDetails")
    public GenderAssignedTargetingOptionDetails genderDetails;
    public AssignedTargetingOptionInput withGenderDetails(GenderAssignedTargetingOptionDetails genderDetails) {
        this.genderDetails = genderDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegionDetails")
    public GeoRegionAssignedTargetingOptionDetailsInput geoRegionDetails;
    public AssignedTargetingOptionInput withGeoRegionDetails(GeoRegionAssignedTargetingOptionDetailsInput geoRegionDetails) {
        this.geoRegionDetails = geoRegionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("householdIncomeDetails")
    public HouseholdIncomeAssignedTargetingOptionDetails householdIncomeDetails;
    public AssignedTargetingOptionInput withHouseholdIncomeDetails(HouseholdIncomeAssignedTargetingOptionDetails householdIncomeDetails) {
        this.householdIncomeDetails = householdIncomeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceDetails")
    public InventorySourceAssignedTargetingOptionDetails inventorySourceDetails;
    public AssignedTargetingOptionInput withInventorySourceDetails(InventorySourceAssignedTargetingOptionDetails inventorySourceDetails) {
        this.inventorySourceDetails = inventorySourceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceGroupDetails")
    public InventorySourceGroupAssignedTargetingOptionDetails inventorySourceGroupDetails;
    public AssignedTargetingOptionInput withInventorySourceGroupDetails(InventorySourceGroupAssignedTargetingOptionDetails inventorySourceGroupDetails) {
        this.inventorySourceGroupDetails = inventorySourceGroupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordDetails")
    public KeywordAssignedTargetingOptionDetails keywordDetails;
    public AssignedTargetingOptionInput withKeywordDetails(KeywordAssignedTargetingOptionDetails keywordDetails) {
        this.keywordDetails = keywordDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageDetails")
    public LanguageAssignedTargetingOptionDetailsInput languageDetails;
    public AssignedTargetingOptionInput withLanguageDetails(LanguageAssignedTargetingOptionDetailsInput languageDetails) {
        this.languageDetails = languageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativeContentPositionDetails")
    public NativeContentPositionAssignedTargetingOptionDetails nativeContentPositionDetails;
    public AssignedTargetingOptionInput withNativeContentPositionDetails(NativeContentPositionAssignedTargetingOptionDetails nativeContentPositionDetails) {
        this.nativeContentPositionDetails = nativeContentPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negativeKeywordListDetails")
    public NegativeKeywordListAssignedTargetingOptionDetails negativeKeywordListDetails;
    public AssignedTargetingOptionInput withNegativeKeywordListDetails(NegativeKeywordListAssignedTargetingOptionDetails negativeKeywordListDetails) {
        this.negativeKeywordListDetails = negativeKeywordListDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omidDetails")
    public OmidAssignedTargetingOptionDetails omidDetails;
    public AssignedTargetingOptionInput withOmidDetails(OmidAssignedTargetingOptionDetails omidDetails) {
        this.omidDetails = omidDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onScreenPositionDetails")
    public OnScreenPositionAssignedTargetingOptionDetailsInput onScreenPositionDetails;
    public AssignedTargetingOptionInput withOnScreenPositionDetails(OnScreenPositionAssignedTargetingOptionDetailsInput onScreenPositionDetails) {
        this.onScreenPositionDetails = onScreenPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemDetails")
    public OperatingSystemAssignedTargetingOptionDetailsInput operatingSystemDetails;
    public AssignedTargetingOptionInput withOperatingSystemDetails(OperatingSystemAssignedTargetingOptionDetailsInput operatingSystemDetails) {
        this.operatingSystemDetails = operatingSystemDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentalStatusDetails")
    public ParentalStatusAssignedTargetingOptionDetails parentalStatusDetails;
    public AssignedTargetingOptionInput withParentalStatusDetails(ParentalStatusAssignedTargetingOptionDetails parentalStatusDetails) {
        this.parentalStatusDetails = parentalStatusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiDetails")
    public PoiAssignedTargetingOptionDetailsInput poiDetails;
    public AssignedTargetingOptionInput withPoiDetails(PoiAssignedTargetingOptionDetailsInput poiDetails) {
        this.poiDetails = poiDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityLocationListDetails")
    public ProximityLocationListAssignedTargetingOptionDetails proximityLocationListDetails;
    public AssignedTargetingOptionInput withProximityLocationListDetails(ProximityLocationListAssignedTargetingOptionDetails proximityLocationListDetails) {
        this.proximityLocationListDetails = proximityLocationListDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalLocationListDetails")
    public RegionalLocationListAssignedTargetingOptionDetails regionalLocationListDetails;
    public AssignedTargetingOptionInput withRegionalLocationListDetails(RegionalLocationListAssignedTargetingOptionDetails regionalLocationListDetails) {
        this.regionalLocationListDetails = regionalLocationListDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveCategoryExclusionDetails")
    public SensitiveCategoryAssignedTargetingOptionDetailsInput sensitiveCategoryExclusionDetails;
    public AssignedTargetingOptionInput withSensitiveCategoryExclusionDetails(SensitiveCategoryAssignedTargetingOptionDetailsInput sensitiveCategoryExclusionDetails) {
        this.sensitiveCategoryExclusionDetails = sensitiveCategoryExclusionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subExchangeDetails")
    public SubExchangeAssignedTargetingOptionDetails subExchangeDetails;
    public AssignedTargetingOptionInput withSubExchangeDetails(SubExchangeAssignedTargetingOptionDetails subExchangeDetails) {
        this.subExchangeDetails = subExchangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyVerifierDetails")
    public ThirdPartyVerifierAssignedTargetingOptionDetails thirdPartyVerifierDetails;
    public AssignedTargetingOptionInput withThirdPartyVerifierDetails(ThirdPartyVerifierAssignedTargetingOptionDetails thirdPartyVerifierDetails) {
        this.thirdPartyVerifierDetails = thirdPartyVerifierDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlDetails")
    public UrlAssignedTargetingOptionDetails urlDetails;
    public AssignedTargetingOptionInput withUrlDetails(UrlAssignedTargetingOptionDetails urlDetails) {
        this.urlDetails = urlDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRewardedContentDetails")
    public UserRewardedContentAssignedTargetingOptionDetailsInput userRewardedContentDetails;
    public AssignedTargetingOptionInput withUserRewardedContentDetails(UserRewardedContentAssignedTargetingOptionDetailsInput userRewardedContentDetails) {
        this.userRewardedContentDetails = userRewardedContentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoPlayerSizeDetails")
    public VideoPlayerSizeAssignedTargetingOptionDetails videoPlayerSizeDetails;
    public AssignedTargetingOptionInput withVideoPlayerSizeDetails(VideoPlayerSizeAssignedTargetingOptionDetails videoPlayerSizeDetails) {
        this.videoPlayerSizeDetails = videoPlayerSizeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewabilityDetails")
    public ViewabilityAssignedTargetingOptionDetails viewabilityDetails;
    public AssignedTargetingOptionInput withViewabilityDetails(ViewabilityAssignedTargetingOptionDetails viewabilityDetails) {
        this.viewabilityDetails = viewabilityDetails;
        return this;
    }
}