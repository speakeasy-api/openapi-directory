package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FloodlightConfiguration
 * Contains properties of a Floodlight configuration.
**/
public class FloodlightConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public FloodlightConfiguration withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public FloodlightConfiguration withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserIdDimensionValue")
    public DimensionValue advertiserIdDimensionValue;
    public FloodlightConfiguration withAdvertiserIdDimensionValue(DimensionValue advertiserIdDimensionValue) {
        this.advertiserIdDimensionValue = advertiserIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsDataSharingEnabled")
    public Boolean analyticsDataSharingEnabled;
    public FloodlightConfiguration withAnalyticsDataSharingEnabled(Boolean analyticsDataSharingEnabled) {
        this.analyticsDataSharingEnabled = analyticsDataSharingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customViewabilityMetric")
    public CustomViewabilityMetric customViewabilityMetric;
    public FloodlightConfiguration withCustomViewabilityMetric(CustomViewabilityMetric customViewabilityMetric) {
        this.customViewabilityMetric = customViewabilityMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exposureToConversionEnabled")
    public Boolean exposureToConversionEnabled;
    public FloodlightConfiguration withExposureToConversionEnabled(Boolean exposureToConversionEnabled) {
        this.exposureToConversionEnabled = exposureToConversionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstDayOfWeek")
    public FloodlightConfigurationFirstDayOfWeekEnum firstDayOfWeek;
    public FloodlightConfiguration withFirstDayOfWeek(FloodlightConfigurationFirstDayOfWeekEnum firstDayOfWeek) {
        this.firstDayOfWeek = firstDayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FloodlightConfiguration withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idDimensionValue")
    public DimensionValue idDimensionValue;
    public FloodlightConfiguration withIdDimensionValue(DimensionValue idDimensionValue) {
        this.idDimensionValue = idDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inAppAttributionTrackingEnabled")
    public Boolean inAppAttributionTrackingEnabled;
    public FloodlightConfiguration withInAppAttributionTrackingEnabled(Boolean inAppAttributionTrackingEnabled) {
        this.inAppAttributionTrackingEnabled = inAppAttributionTrackingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FloodlightConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lookbackConfiguration")
    public LookbackConfiguration lookbackConfiguration;
    public FloodlightConfiguration withLookbackConfiguration(LookbackConfiguration lookbackConfiguration) {
        this.lookbackConfiguration = lookbackConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("naturalSearchConversionAttributionOption")
    public FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum naturalSearchConversionAttributionOption;
    public FloodlightConfiguration withNaturalSearchConversionAttributionOption(FloodlightConfigurationNaturalSearchConversionAttributionOptionEnum naturalSearchConversionAttributionOption) {
        this.naturalSearchConversionAttributionOption = naturalSearchConversionAttributionOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("omnitureSettings")
    public OmnitureSettings omnitureSettings;
    public FloodlightConfiguration withOmnitureSettings(OmnitureSettings omnitureSettings) {
        this.omnitureSettings = omnitureSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public FloodlightConfiguration withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagSettings")
    public TagSettings tagSettings;
    public FloodlightConfiguration withTagSettings(TagSettings tagSettings) {
        this.tagSettings = tagSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyAuthenticationTokens")
    public ThirdPartyAuthenticationToken[] thirdPartyAuthenticationTokens;
    public FloodlightConfiguration withThirdPartyAuthenticationTokens(ThirdPartyAuthenticationToken[] thirdPartyAuthenticationTokens) {
        this.thirdPartyAuthenticationTokens = thirdPartyAuthenticationTokens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefinedVariableConfigurations")
    public UserDefinedVariableConfiguration[] userDefinedVariableConfigurations;
    public FloodlightConfiguration withUserDefinedVariableConfigurations(UserDefinedVariableConfiguration[] userDefinedVariableConfigurations) {
        this.userDefinedVariableConfigurations = userDefinedVariableConfigurations;
        return this;
    }
}