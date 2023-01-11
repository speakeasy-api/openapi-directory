package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ValueFrequency
 * A value of a field, including its frequency.
**/
public class GooglePrivacyDlpV2ValueFrequency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GooglePrivacyDlpV2ValueFrequency withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public GooglePrivacyDlpV2Value value;
    public GooglePrivacyDlpV2ValueFrequency withValue(GooglePrivacyDlpV2Value value) {
        this.value = value;
        return this;
    }
}