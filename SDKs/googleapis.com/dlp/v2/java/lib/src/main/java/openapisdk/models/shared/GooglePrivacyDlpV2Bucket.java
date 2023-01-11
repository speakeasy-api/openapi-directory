package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Bucket
 * Bucket is represented as a range, along with replacement values.
**/
public class GooglePrivacyDlpV2Bucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public GooglePrivacyDlpV2Value max;
    public GooglePrivacyDlpV2Bucket withMax(GooglePrivacyDlpV2Value max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public GooglePrivacyDlpV2Value min;
    public GooglePrivacyDlpV2Bucket withMin(GooglePrivacyDlpV2Value min) {
        this.min = min;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replacementValue")
    public GooglePrivacyDlpV2Value replacementValue;
    public GooglePrivacyDlpV2Bucket withReplacementValue(GooglePrivacyDlpV2Value replacementValue) {
        this.replacementValue = replacementValue;
        return this;
    }
}