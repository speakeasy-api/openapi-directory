package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RecordCondition
 * A condition for determining whether a transformation should be applied to a field.
**/
public class GooglePrivacyDlpV2RecordCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expressions")
    public GooglePrivacyDlpV2Expressions expressions;
    public GooglePrivacyDlpV2RecordCondition withExpressions(GooglePrivacyDlpV2Expressions expressions) {
        this.expressions = expressions;
        return this;
    }
}