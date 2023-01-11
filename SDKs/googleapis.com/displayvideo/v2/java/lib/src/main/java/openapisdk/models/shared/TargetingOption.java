package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingOption
 * Represents a single targeting option, which is a targetable concept in DV360.
**/
public class TargetingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRangeDetails")
    public AgeRangeTargetingOptionDetails ageRangeDetails;
    public TargetingOption withAgeRangeDetails(AgeRangeTargetingOptionDetails ageRangeDetails) {
        this.ageRangeDetails = ageRangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appCategoryDetails")
    public AppCategoryTargetingOptionDetails appCategoryDetails;
    public TargetingOption withAppCategoryDetails(AppCategoryTargetingOptionDetails appCategoryDetails) {
        this.appCategoryDetails = appCategoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioContentTypeDetails")
    public AudioContentTypeTargetingOptionDetails audioContentTypeDetails;
    public TargetingOption withAudioContentTypeDetails(AudioContentTypeTargetingOptionDetails audioContentTypeDetails) {
        this.audioContentTypeDetails = audioContentTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedSellerStatusDetails")
    public AuthorizedSellerStatusTargetingOptionDetails authorizedSellerStatusDetails;
    public TargetingOption withAuthorizedSellerStatusDetails(AuthorizedSellerStatusTargetingOptionDetails authorizedSellerStatusDetails) {
        this.authorizedSellerStatusDetails = authorizedSellerStatusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserDetails")
    public BrowserTargetingOptionDetails browserDetails;
    public TargetingOption withBrowserDetails(BrowserTargetingOptionDetails browserDetails) {
        this.browserDetails = browserDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessChainDetails")
    public BusinessChainTargetingOptionDetails businessChainDetails;
    public TargetingOption withBusinessChainDetails(BusinessChainTargetingOptionDetails businessChainDetails) {
        this.businessChainDetails = businessChainDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierAndIspDetails")
    public CarrierAndIspTargetingOptionDetails carrierAndIspDetails;
    public TargetingOption withCarrierAndIspDetails(CarrierAndIspTargetingOptionDetails carrierAndIspDetails) {
        this.carrierAndIspDetails = carrierAndIspDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryDetails")
    public CategoryTargetingOptionDetails categoryDetails;
    public TargetingOption withCategoryDetails(CategoryTargetingOptionDetails categoryDetails) {
        this.categoryDetails = categoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDurationDetails")
    public ContentDurationTargetingOptionDetails contentDurationDetails;
    public TargetingOption withContentDurationDetails(ContentDurationTargetingOptionDetails contentDurationDetails) {
        this.contentDurationDetails = contentDurationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentGenreDetails")
    public ContentGenreTargetingOptionDetails contentGenreDetails;
    public TargetingOption withContentGenreDetails(ContentGenreTargetingOptionDetails contentGenreDetails) {
        this.contentGenreDetails = contentGenreDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentInstreamPositionDetails")
    public ContentInstreamPositionTargetingOptionDetails contentInstreamPositionDetails;
    public TargetingOption withContentInstreamPositionDetails(ContentInstreamPositionTargetingOptionDetails contentInstreamPositionDetails) {
        this.contentInstreamPositionDetails = contentInstreamPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOutstreamPositionDetails")
    public ContentOutstreamPositionTargetingOptionDetails contentOutstreamPositionDetails;
    public TargetingOption withContentOutstreamPositionDetails(ContentOutstreamPositionTargetingOptionDetails contentOutstreamPositionDetails) {
        this.contentOutstreamPositionDetails = contentOutstreamPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentStreamTypeDetails")
    public ContentStreamTypeTargetingOptionDetails contentStreamTypeDetails;
    public TargetingOption withContentStreamTypeDetails(ContentStreamTypeTargetingOptionDetails contentStreamTypeDetails) {
        this.contentStreamTypeDetails = contentStreamTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMakeModelDetails")
    public DeviceMakeModelTargetingOptionDetails deviceMakeModelDetails;
    public TargetingOption withDeviceMakeModelDetails(DeviceMakeModelTargetingOptionDetails deviceMakeModelDetails) {
        this.deviceMakeModelDetails = deviceMakeModelDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTypeDetails")
    public DeviceTypeTargetingOptionDetails deviceTypeDetails;
    public TargetingOption withDeviceTypeDetails(DeviceTypeTargetingOptionDetails deviceTypeDetails) {
        this.deviceTypeDetails = deviceTypeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digitalContentLabelDetails")
    public DigitalContentLabelTargetingOptionDetails digitalContentLabelDetails;
    public TargetingOption withDigitalContentLabelDetails(DigitalContentLabelTargetingOptionDetails digitalContentLabelDetails) {
        this.digitalContentLabelDetails = digitalContentLabelDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentDetails")
    public EnvironmentTargetingOptionDetails environmentDetails;
    public TargetingOption withEnvironmentDetails(EnvironmentTargetingOptionDetails environmentDetails) {
        this.environmentDetails = environmentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeDetails")
    public ExchangeTargetingOptionDetails exchangeDetails;
    public TargetingOption withExchangeDetails(ExchangeTargetingOptionDetails exchangeDetails) {
        this.exchangeDetails = exchangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genderDetails")
    public GenderTargetingOptionDetails genderDetails;
    public TargetingOption withGenderDetails(GenderTargetingOptionDetails genderDetails) {
        this.genderDetails = genderDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegionDetails")
    public GeoRegionTargetingOptionDetails geoRegionDetails;
    public TargetingOption withGeoRegionDetails(GeoRegionTargetingOptionDetails geoRegionDetails) {
        this.geoRegionDetails = geoRegionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("householdIncomeDetails")
    public HouseholdIncomeTargetingOptionDetails householdIncomeDetails;
    public TargetingOption withHouseholdIncomeDetails(HouseholdIncomeTargetingOptionDetails householdIncomeDetails) {
        this.householdIncomeDetails = householdIncomeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageDetails")
    public LanguageTargetingOptionDetails languageDetails;
    public TargetingOption withLanguageDetails(LanguageTargetingOptionDetails languageDetails) {
        this.languageDetails = languageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TargetingOption withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nativeContentPositionDetails")
    public NativeContentPositionTargetingOptionDetails nativeContentPositionDetails;
    public TargetingOption withNativeContentPositionDetails(NativeContentPositionTargetingOptionDetails nativeContentPositionDetails) {
        this.nativeContentPositionDetails = nativeContentPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omidDetails")
    public OmidTargetingOptionDetails omidDetails;
    public TargetingOption withOmidDetails(OmidTargetingOptionDetails omidDetails) {
        this.omidDetails = omidDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onScreenPositionDetails")
    public OnScreenPositionTargetingOptionDetails onScreenPositionDetails;
    public TargetingOption withOnScreenPositionDetails(OnScreenPositionTargetingOptionDetails onScreenPositionDetails) {
        this.onScreenPositionDetails = onScreenPositionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemDetails")
    public OperatingSystemTargetingOptionDetails operatingSystemDetails;
    public TargetingOption withOperatingSystemDetails(OperatingSystemTargetingOptionDetails operatingSystemDetails) {
        this.operatingSystemDetails = operatingSystemDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentalStatusDetails")
    public ParentalStatusTargetingOptionDetails parentalStatusDetails;
    public TargetingOption withParentalStatusDetails(ParentalStatusTargetingOptionDetails parentalStatusDetails) {
        this.parentalStatusDetails = parentalStatusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiDetails")
    public PoiTargetingOptionDetails poiDetails;
    public TargetingOption withPoiDetails(PoiTargetingOptionDetails poiDetails) {
        this.poiDetails = poiDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveCategoryDetails")
    public SensitiveCategoryTargetingOptionDetails sensitiveCategoryDetails;
    public TargetingOption withSensitiveCategoryDetails(SensitiveCategoryTargetingOptionDetails sensitiveCategoryDetails) {
        this.sensitiveCategoryDetails = sensitiveCategoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subExchangeDetails")
    public SubExchangeTargetingOptionDetails subExchangeDetails;
    public TargetingOption withSubExchangeDetails(SubExchangeTargetingOptionDetails subExchangeDetails) {
        this.subExchangeDetails = subExchangeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public TargetingOption withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingType")
    public TargetingOptionTargetingTypeEnum targetingType;
    public TargetingOption withTargetingType(TargetingOptionTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRewardedContentDetails")
    public UserRewardedContentTargetingOptionDetails userRewardedContentDetails;
    public TargetingOption withUserRewardedContentDetails(UserRewardedContentTargetingOptionDetails userRewardedContentDetails) {
        this.userRewardedContentDetails = userRewardedContentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoPlayerSizeDetails")
    public VideoPlayerSizeTargetingOptionDetails videoPlayerSizeDetails;
    public TargetingOption withVideoPlayerSizeDetails(VideoPlayerSizeTargetingOptionDetails videoPlayerSizeDetails) {
        this.videoPlayerSizeDetails = videoPlayerSizeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewabilityDetails")
    public ViewabilityTargetingOptionDetails viewabilityDetails;
    public TargetingOption withViewabilityDetails(ViewabilityTargetingOptionDetails viewabilityDetails) {
        this.viewabilityDetails = viewabilityDetails;
        return this;
    }
}