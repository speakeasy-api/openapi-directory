package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Conditions
 * A collection of conditions.
**/
public class GooglePrivacyDlpV2Conditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GooglePrivacyDlpV2Condition[] conditions;
    public GooglePrivacyDlpV2Conditions withConditions(GooglePrivacyDlpV2Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
}