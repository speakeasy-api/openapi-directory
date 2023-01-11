package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DetectionRule
 * Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.
**/
public class GooglePrivacyDlpV2DetectionRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotwordRule")
    public GooglePrivacyDlpV2HotwordRule hotwordRule;
    public GooglePrivacyDlpV2DetectionRule withHotwordRule(GooglePrivacyDlpV2HotwordRule hotwordRule) {
        this.hotwordRule = hotwordRule;
        return this;
    }
}