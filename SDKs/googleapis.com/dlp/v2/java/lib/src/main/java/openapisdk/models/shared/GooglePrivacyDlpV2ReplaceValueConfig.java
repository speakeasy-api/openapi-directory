package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ReplaceValueConfig
 * Replace each input value with a given `Value`.
**/
public class GooglePrivacyDlpV2ReplaceValueConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newValue")
    public GooglePrivacyDlpV2Value newValue;
    public GooglePrivacyDlpV2ReplaceValueConfig withNewValue(GooglePrivacyDlpV2Value newValue) {
        this.newValue = newValue;
        return this;
    }
}