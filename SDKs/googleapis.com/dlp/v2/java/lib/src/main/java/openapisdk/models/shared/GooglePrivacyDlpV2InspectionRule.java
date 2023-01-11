package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectionRule
 * A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
**/
public class GooglePrivacyDlpV2InspectionRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionRule")
    public GooglePrivacyDlpV2ExclusionRule exclusionRule;
    public GooglePrivacyDlpV2InspectionRule withExclusionRule(GooglePrivacyDlpV2ExclusionRule exclusionRule) {
        this.exclusionRule = exclusionRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotwordRule")
    public GooglePrivacyDlpV2HotwordRule hotwordRule;
    public GooglePrivacyDlpV2InspectionRule withHotwordRule(GooglePrivacyDlpV2HotwordRule hotwordRule) {
        this.hotwordRule = hotwordRule;
        return this;
    }
}