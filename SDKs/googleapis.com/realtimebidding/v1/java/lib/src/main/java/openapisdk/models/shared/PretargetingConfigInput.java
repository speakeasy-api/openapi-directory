package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PretargetingConfigInput
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
public class PretargetingConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedUserTargetingModes")
    public PretargetingConfigAllowedUserTargetingModesEnum[] allowedUserTargetingModes;
    public PretargetingConfigInput withAllowedUserTargetingModes(PretargetingConfigAllowedUserTargetingModesEnum[] allowedUserTargetingModes) {
        this.allowedUserTargetingModes = allowedUserTargetingModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appTargeting")
    public AppTargeting appTargeting;
    public PretargetingConfigInput withAppTargeting(AppTargeting appTargeting) {
        this.appTargeting = appTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PretargetingConfigInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedContentLabelIds")
    public String[] excludedContentLabelIds;
    public PretargetingConfigInput withExcludedContentLabelIds(String[] excludedContentLabelIds) {
        this.excludedContentLabelIds = excludedContentLabelIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoTargeting")
    public NumericTargetingDimension geoTargeting;
    public PretargetingConfigInput withGeoTargeting(NumericTargetingDimension geoTargeting) {
        this.geoTargeting = geoTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedCreativeDimensions")
    public CreativeDimensions[] includedCreativeDimensions;
    public PretargetingConfigInput withIncludedCreativeDimensions(CreativeDimensions[] includedCreativeDimensions) {
        this.includedCreativeDimensions = includedCreativeDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedEnvironments")
    public PretargetingConfigIncludedEnvironmentsEnum[] includedEnvironments;
    public PretargetingConfigInput withIncludedEnvironments(PretargetingConfigIncludedEnvironmentsEnum[] includedEnvironments) {
        this.includedEnvironments = includedEnvironments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedFormats")
    public PretargetingConfigIncludedFormatsEnum[] includedFormats;
    public PretargetingConfigInput withIncludedFormats(PretargetingConfigIncludedFormatsEnum[] includedFormats) {
        this.includedFormats = includedFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedLanguages")
    public String[] includedLanguages;
    public PretargetingConfigInput withIncludedLanguages(String[] includedLanguages) {
        this.includedLanguages = includedLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedMobileOperatingSystemIds")
    public String[] includedMobileOperatingSystemIds;
    public PretargetingConfigInput withIncludedMobileOperatingSystemIds(String[] includedMobileOperatingSystemIds) {
        this.includedMobileOperatingSystemIds = includedMobileOperatingSystemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedPlatforms")
    public PretargetingConfigIncludedPlatformsEnum[] includedPlatforms;
    public PretargetingConfigInput withIncludedPlatforms(PretargetingConfigIncludedPlatformsEnum[] includedPlatforms) {
        this.includedPlatforms = includedPlatforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedUserIdTypes")
    public PretargetingConfigIncludedUserIdTypesEnum[] includedUserIdTypes;
    public PretargetingConfigInput withIncludedUserIdTypes(PretargetingConfigIncludedUserIdTypesEnum[] includedUserIdTypes) {
        this.includedUserIdTypes = includedUserIdTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interstitialTargeting")
    public PretargetingConfigInterstitialTargetingEnum interstitialTargeting;
    public PretargetingConfigInput withInterstitialTargeting(PretargetingConfigInterstitialTargetingEnum interstitialTargeting) {
        this.interstitialTargeting = interstitialTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumQps")
    public String maximumQps;
    public PretargetingConfigInput withMaximumQps(String maximumQps) {
        this.maximumQps = maximumQps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumViewabilityDecile")
    public Integer minimumViewabilityDecile;
    public PretargetingConfigInput withMinimumViewabilityDecile(Integer minimumViewabilityDecile) {
        this.minimumViewabilityDecile = minimumViewabilityDecile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherTargeting")
    public StringTargetingDimension publisherTargeting;
    public PretargetingConfigInput withPublisherTargeting(StringTargetingDimension publisherTargeting) {
        this.publisherTargeting = publisherTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userListTargeting")
    public NumericTargetingDimension userListTargeting;
    public PretargetingConfigInput withUserListTargeting(NumericTargetingDimension userListTargeting) {
        this.userListTargeting = userListTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verticalTargeting")
    public NumericTargetingDimension verticalTargeting;
    public PretargetingConfigInput withVerticalTargeting(NumericTargetingDimension verticalTargeting) {
        this.verticalTargeting = verticalTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webTargeting")
    public StringTargetingDimension webTargeting;
    public PretargetingConfigInput withWebTargeting(StringTargetingDimension webTargeting) {
        this.webTargeting = webTargeting;
        return this;
    }
}