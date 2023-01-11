package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PretargetingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingId")
    public String billingId;
    public PretargetingConfig withBillingId(String billingId) {
        this.billingId = billingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public PretargetingConfig withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configName")
    public String configName;
    public PretargetingConfig withConfigName(String configName) {
        this.configName = configName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeType")
    public String[] creativeType;
    public PretargetingConfig withCreativeType(String[] creativeType) {
        this.creativeType = creativeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public PretargetingConfigDimensions[] dimensions;
    public PretargetingConfig withDimensions(PretargetingConfigDimensions[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedContentLabels")
    public String[] excludedContentLabels;
    public PretargetingConfig withExcludedContentLabels(String[] excludedContentLabels) {
        this.excludedContentLabels = excludedContentLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedGeoCriteriaIds")
    public String[] excludedGeoCriteriaIds;
    public PretargetingConfig withExcludedGeoCriteriaIds(String[] excludedGeoCriteriaIds) {
        this.excludedGeoCriteriaIds = excludedGeoCriteriaIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedPlacements")
    public PretargetingConfigExcludedPlacements[] excludedPlacements;
    public PretargetingConfig withExcludedPlacements(PretargetingConfigExcludedPlacements[] excludedPlacements) {
        this.excludedPlacements = excludedPlacements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedUserLists")
    public String[] excludedUserLists;
    public PretargetingConfig withExcludedUserLists(String[] excludedUserLists) {
        this.excludedUserLists = excludedUserLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedVerticals")
    public String[] excludedVerticals;
    public PretargetingConfig withExcludedVerticals(String[] excludedVerticals) {
        this.excludedVerticals = excludedVerticals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoCriteriaIds")
    public String[] geoCriteriaIds;
    public PretargetingConfig withGeoCriteriaIds(String[] geoCriteriaIds) {
        this.geoCriteriaIds = geoCriteriaIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isActive")
    public Boolean isActive;
    public PretargetingConfig withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PretargetingConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public PretargetingConfig withLanguages(String[] languages) {
        this.languages = languages;
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
    @JsonProperty("mobileCarriers")
    public String[] mobileCarriers;
    public PretargetingConfig withMobileCarriers(String[] mobileCarriers) {
        this.mobileCarriers = mobileCarriers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDevices")
    public String[] mobileDevices;
    public PretargetingConfig withMobileDevices(String[] mobileDevices) {
        this.mobileDevices = mobileDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileOperatingSystemVersions")
    public String[] mobileOperatingSystemVersions;
    public PretargetingConfig withMobileOperatingSystemVersions(String[] mobileOperatingSystemVersions) {
        this.mobileOperatingSystemVersions = mobileOperatingSystemVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placements")
    public PretargetingConfigPlacements[] placements;
    public PretargetingConfig withPlacements(PretargetingConfigPlacements[] placements) {
        this.placements = placements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platforms")
    public String[] platforms;
    public PretargetingConfig withPlatforms(String[] platforms) {
        this.platforms = platforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedCreativeAttributes")
    public String[] supportedCreativeAttributes;
    public PretargetingConfig withSupportedCreativeAttributes(String[] supportedCreativeAttributes) {
        this.supportedCreativeAttributes = supportedCreativeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userIdentifierDataRequired")
    public String[] userIdentifierDataRequired;
    public PretargetingConfig withUserIdentifierDataRequired(String[] userIdentifierDataRequired) {
        this.userIdentifierDataRequired = userIdentifierDataRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLists")
    public String[] userLists;
    public PretargetingConfig withUserLists(String[] userLists) {
        this.userLists = userLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendorTypes")
    public String[] vendorTypes;
    public PretargetingConfig withVendorTypes(String[] vendorTypes) {
        this.vendorTypes = vendorTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verticals")
    public String[] verticals;
    public PretargetingConfig withVerticals(String[] verticals) {
        this.verticals = verticals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoPlayerSizes")
    public PretargetingConfigVideoPlayerSizes[] videoPlayerSizes;
    public PretargetingConfig withVideoPlayerSizes(PretargetingConfigVideoPlayerSizes[] videoPlayerSizes) {
        this.videoPlayerSizes = videoPlayerSizes;
        return this;
    }
}