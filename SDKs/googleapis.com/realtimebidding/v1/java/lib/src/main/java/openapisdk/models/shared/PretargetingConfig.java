package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PretargetingConfig
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
public class PretargetingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedUserTargetingModes")
    public PretargetingConfigAllowedUserTargetingModesEnum[] allowedUserTargetingModes;
    public PretargetingConfig withAllowedUserTargetingModes(PretargetingConfigAllowedUserTargetingModesEnum[] allowedUserTargetingModes) {
        this.allowedUserTargetingModes = allowedUserTargetingModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appTargeting")
    public AppTargeting appTargeting;
    public PretargetingConfig withAppTargeting(AppTargeting appTargeting) {
        this.appTargeting = appTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingId")
    public String billingId;
    public PretargetingConfig withBillingId(String billingId) {
        this.billingId = billingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PretargetingConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedContentLabelIds")
    public String[] excludedContentLabelIds;
    public PretargetingConfig withExcludedContentLabelIds(String[] excludedContentLabelIds) {
        this.excludedContentLabelIds = excludedContentLabelIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoTargeting")
    public NumericTargetingDimension geoTargeting;
    public PretargetingConfig withGeoTargeting(NumericTargetingDimension geoTargeting) {
        this.geoTargeting = geoTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedCreativeDimensions")
    public CreativeDimensions[] includedCreativeDimensions;
    public PretargetingConfig withIncludedCreativeDimensions(CreativeDimensions[] includedCreativeDimensions) {
        this.includedCreativeDimensions = includedCreativeDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedEnvironments")
    public PretargetingConfigIncludedEnvironmentsEnum[] includedEnvironments;
    public PretargetingConfig withIncludedEnvironments(PretargetingConfigIncludedEnvironmentsEnum[] includedEnvironments) {
        this.includedEnvironments = includedEnvironments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedFormats")
    public PretargetingConfigIncludedFormatsEnum[] includedFormats;
    public PretargetingConfig withIncludedFormats(PretargetingConfigIncludedFormatsEnum[] includedFormats) {
        this.includedFormats = includedFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedLanguages")
    public String[] includedLanguages;
    public PretargetingConfig withIncludedLanguages(String[] includedLanguages) {
        this.includedLanguages = includedLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedMobileOperatingSystemIds")
    public String[] includedMobileOperatingSystemIds;
    public PretargetingConfig withIncludedMobileOperatingSystemIds(String[] includedMobileOperatingSystemIds) {
        this.includedMobileOperatingSystemIds = includedMobileOperatingSystemIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedPlatforms")
    public PretargetingConfigIncludedPlatformsEnum[] includedPlatforms;
    public PretargetingConfig withIncludedPlatforms(PretargetingConfigIncludedPlatformsEnum[] includedPlatforms) {
        this.includedPlatforms = includedPlatforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedUserIdTypes")
    public PretargetingConfigIncludedUserIdTypesEnum[] includedUserIdTypes;
    public PretargetingConfig withIncludedUserIdTypes(PretargetingConfigIncludedUserIdTypesEnum[] includedUserIdTypes) {
        this.includedUserIdTypes = includedUserIdTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interstitialTargeting")
    public PretargetingConfigInterstitialTargetingEnum interstitialTargeting;
    public PretargetingConfig withInterstitialTargeting(PretargetingConfigInterstitialTargetingEnum interstitialTargeting) {
        this.interstitialTargeting = interstitialTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalidGeoIds")
    public String[] invalidGeoIds;
    public PretargetingConfig withInvalidGeoIds(String[] invalidGeoIds) {
        this.invalidGeoIds = invalidGeoIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumQps")
    public String maximumQps;
    public PretargetingConfig withMaximumQps(String maximumQps) {
        this.maximumQps = maximumQps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumViewabilityDecile")
    public Integer minimumViewabilityDecile;
    public PretargetingConfig withMinimumViewabilityDecile(Integer minimumViewabilityDecile) {
        this.minimumViewabilityDecile = minimumViewabilityDecile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PretargetingConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherTargeting")
    public StringTargetingDimension publisherTargeting;
    public PretargetingConfig withPublisherTargeting(StringTargetingDimension publisherTargeting) {
        this.publisherTargeting = publisherTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PretargetingConfigStateEnum state;
    public PretargetingConfig withState(PretargetingConfigStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userListTargeting")
    public NumericTargetingDimension userListTargeting;
    public PretargetingConfig withUserListTargeting(NumericTargetingDimension userListTargeting) {
        this.userListTargeting = userListTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verticalTargeting")
    public NumericTargetingDimension verticalTargeting;
    public PretargetingConfig withVerticalTargeting(NumericTargetingDimension verticalTargeting) {
        this.verticalTargeting = verticalTargeting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webTargeting")
    public StringTargetingDimension webTargeting;
    public PretargetingConfig withWebTargeting(StringTargetingDimension webTargeting) {
        this.webTargeting = webTargeting;
        return this;
    }
}