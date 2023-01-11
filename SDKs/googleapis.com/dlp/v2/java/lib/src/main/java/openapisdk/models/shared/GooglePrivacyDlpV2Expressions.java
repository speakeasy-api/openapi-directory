package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Expressions
 * An expression, consisting of an operator and conditions.
**/
public class GooglePrivacyDlpV2Expressions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GooglePrivacyDlpV2Conditions conditions;
    public GooglePrivacyDlpV2Expressions withConditions(GooglePrivacyDlpV2Conditions conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logicalOperator")
    public GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum logicalOperator;
    public GooglePrivacyDlpV2Expressions withLogicalOperator(GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum logicalOperator) {
        this.logicalOperator = logicalOperator;
        return this;
    }
}