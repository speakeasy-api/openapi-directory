package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeServingDecision
 * Top level status and detected attributes of a creative.
**/
public class CreativeServingDecision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adTechnologyProviders")
    public AdTechnologyProviders adTechnologyProviders;
    public CreativeServingDecision withAdTechnologyProviders(AdTechnologyProviders adTechnologyProviders) {
        this.adTechnologyProviders = adTechnologyProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chinaPolicyCompliance")
    public PolicyCompliance chinaPolicyCompliance;
    public CreativeServingDecision withChinaPolicyCompliance(PolicyCompliance chinaPolicyCompliance) {
        this.chinaPolicyCompliance = chinaPolicyCompliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealsPolicyCompliance")
    public PolicyCompliance dealsPolicyCompliance;
    public CreativeServingDecision withDealsPolicyCompliance(PolicyCompliance dealsPolicyCompliance) {
        this.dealsPolicyCompliance = dealsPolicyCompliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedAdvertisers")
    public AdvertiserAndBrand[] detectedAdvertisers;
    public CreativeServingDecision withDetectedAdvertisers(AdvertiserAndBrand[] detectedAdvertisers) {
        this.detectedAdvertisers = detectedAdvertisers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedAttributes")
    public CreativeServingDecisionDetectedAttributesEnum[] detectedAttributes;
    public CreativeServingDecision withDetectedAttributes(CreativeServingDecisionDetectedAttributesEnum[] detectedAttributes) {
        this.detectedAttributes = detectedAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedClickThroughUrls")
    public String[] detectedClickThroughUrls;
    public CreativeServingDecision withDetectedClickThroughUrls(String[] detectedClickThroughUrls) {
        this.detectedClickThroughUrls = detectedClickThroughUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedDomains")
    public String[] detectedDomains;
    public CreativeServingDecision withDetectedDomains(String[] detectedDomains) {
        this.detectedDomains = detectedDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedLanguages")
    public String[] detectedLanguages;
    public CreativeServingDecision withDetectedLanguages(String[] detectedLanguages) {
        this.detectedLanguages = detectedLanguages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedProductCategories")
    public Integer[] detectedProductCategories;
    public CreativeServingDecision withDetectedProductCategories(Integer[] detectedProductCategories) {
        this.detectedProductCategories = detectedProductCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedSensitiveCategories")
    public Integer[] detectedSensitiveCategories;
    public CreativeServingDecision withDetectedSensitiveCategories(Integer[] detectedSensitiveCategories) {
        this.detectedSensitiveCategories = detectedSensitiveCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedVendorIds")
    public Integer[] detectedVendorIds;
    public CreativeServingDecision withDetectedVendorIds(Integer[] detectedVendorIds) {
        this.detectedVendorIds = detectedVendorIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastStatusUpdate")
    public String lastStatusUpdate;
    public CreativeServingDecision withLastStatusUpdate(String lastStatusUpdate) {
        this.lastStatusUpdate = lastStatusUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkPolicyCompliance")
    public PolicyCompliance networkPolicyCompliance;
    public CreativeServingDecision withNetworkPolicyCompliance(PolicyCompliance networkPolicyCompliance) {
        this.networkPolicyCompliance = networkPolicyCompliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformPolicyCompliance")
    public PolicyCompliance platformPolicyCompliance;
    public CreativeServingDecision withPlatformPolicyCompliance(PolicyCompliance platformPolicyCompliance) {
        this.platformPolicyCompliance = platformPolicyCompliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("russiaPolicyCompliance")
    public PolicyCompliance russiaPolicyCompliance;
    public CreativeServingDecision withRussiaPolicyCompliance(PolicyCompliance russiaPolicyCompliance) {
        this.russiaPolicyCompliance = russiaPolicyCompliance;
        return this;
    }
}