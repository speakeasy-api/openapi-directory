package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectionRuleSet
 * Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
**/
public class GooglePrivacyDlpV2InspectionRuleSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypes")
    public GooglePrivacyDlpV2InfoType[] infoTypes;
    public GooglePrivacyDlpV2InspectionRuleSet withInfoTypes(GooglePrivacyDlpV2InfoType[] infoTypes) {
        this.infoTypes = infoTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public GooglePrivacyDlpV2InspectionRule[] rules;
    public GooglePrivacyDlpV2InspectionRuleSet withRules(GooglePrivacyDlpV2InspectionRule[] rules) {
        this.rules = rules;
        return this;
    }
}