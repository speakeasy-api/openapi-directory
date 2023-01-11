package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CategoricalStatsConfig
 * Compute numerical stats over an individual column, including number of distinct values and value count distribution.
**/
public class GooglePrivacyDlpV2CategoricalStatsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GooglePrivacyDlpV2FieldId field;
    public GooglePrivacyDlpV2CategoricalStatsConfig withField(GooglePrivacyDlpV2FieldId field) {
        this.field = field;
        return this;
    }
}