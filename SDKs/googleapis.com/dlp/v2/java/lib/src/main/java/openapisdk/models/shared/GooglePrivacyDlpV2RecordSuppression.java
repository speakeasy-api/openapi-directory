package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RecordSuppression
 * Configuration to suppress records whose suppression conditions evaluate to true.
**/
public class GooglePrivacyDlpV2RecordSuppression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public GooglePrivacyDlpV2RecordCondition condition;
    public GooglePrivacyDlpV2RecordSuppression withCondition(GooglePrivacyDlpV2RecordCondition condition) {
        this.condition = condition;
        return this;
    }
}