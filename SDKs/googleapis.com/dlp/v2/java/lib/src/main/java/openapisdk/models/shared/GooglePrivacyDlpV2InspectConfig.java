package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectConfig
 * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
**/
public class GooglePrivacyDlpV2InspectConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOptions")
    public GooglePrivacyDlpV2InspectConfigContentOptionsEnum[] contentOptions;
    public GooglePrivacyDlpV2InspectConfig withContentOptions(GooglePrivacyDlpV2InspectConfigContentOptionsEnum[] contentOptions) {
        this.contentOptions = contentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customInfoTypes")
    public GooglePrivacyDlpV2CustomInfoType[] customInfoTypes;
    public GooglePrivacyDlpV2InspectConfig withCustomInfoTypes(GooglePrivacyDlpV2CustomInfoType[] customInfoTypes) {
        this.customInfoTypes = customInfoTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeInfoTypes")
    public Boolean excludeInfoTypes;
    public GooglePrivacyDlpV2InspectConfig withExcludeInfoTypes(Boolean excludeInfoTypes) {
        this.excludeInfoTypes = excludeInfoTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeQuote")
    public Boolean includeQuote;
    public GooglePrivacyDlpV2InspectConfig withIncludeQuote(Boolean includeQuote) {
        this.includeQuote = includeQuote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypes")
    public GooglePrivacyDlpV2InfoType[] infoTypes;
    public GooglePrivacyDlpV2InspectConfig withInfoTypes(GooglePrivacyDlpV2InfoType[] infoTypes) {
        this.infoTypes = infoTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limits")
    public GooglePrivacyDlpV2FindingLimits limits;
    public GooglePrivacyDlpV2InspectConfig withLimits(GooglePrivacyDlpV2FindingLimits limits) {
        this.limits = limits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minLikelihood")
    public GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum minLikelihood;
    public GooglePrivacyDlpV2InspectConfig withMinLikelihood(GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum minLikelihood) {
        this.minLikelihood = minLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleSet")
    public GooglePrivacyDlpV2InspectionRuleSet[] ruleSet;
    public GooglePrivacyDlpV2InspectConfig withRuleSet(GooglePrivacyDlpV2InspectionRuleSet[] ruleSet) {
        this.ruleSet = ruleSet;
        return this;
    }
}