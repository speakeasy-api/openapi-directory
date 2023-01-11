package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeRequirements
 * Message captures data about the creatives in the deal.
**/
public class CreativeRequirements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeFormat")
    public CreativeRequirementsCreativeFormatEnum creativeFormat;
    public CreativeRequirements withCreativeFormat(CreativeRequirementsCreativeFormatEnum creativeFormat) {
        this.creativeFormat = creativeFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativePreApprovalPolicy")
    public CreativeRequirementsCreativePreApprovalPolicyEnum creativePreApprovalPolicy;
    public CreativeRequirements withCreativePreApprovalPolicy(CreativeRequirementsCreativePreApprovalPolicyEnum creativePreApprovalPolicy) {
        this.creativePreApprovalPolicy = creativePreApprovalPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeSafeFrameCompatibility")
    public CreativeRequirementsCreativeSafeFrameCompatibilityEnum creativeSafeFrameCompatibility;
    public CreativeRequirements withCreativeSafeFrameCompatibility(CreativeRequirementsCreativeSafeFrameCompatibilityEnum creativeSafeFrameCompatibility) {
        this.creativeSafeFrameCompatibility = creativeSafeFrameCompatibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAdDurationMs")
    public String maxAdDurationMs;
    public CreativeRequirements withMaxAdDurationMs(String maxAdDurationMs) {
        this.maxAdDurationMs = maxAdDurationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticCreativeSource")
    public CreativeRequirementsProgrammaticCreativeSourceEnum programmaticCreativeSource;
    public CreativeRequirements withProgrammaticCreativeSource(CreativeRequirementsProgrammaticCreativeSourceEnum programmaticCreativeSource) {
        this.programmaticCreativeSource = programmaticCreativeSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippableAdType")
    public CreativeRequirementsSkippableAdTypeEnum skippableAdType;
    public CreativeRequirements withSkippableAdType(CreativeRequirementsSkippableAdTypeEnum skippableAdType) {
        this.skippableAdType = skippableAdType;
        return this;
    }
}