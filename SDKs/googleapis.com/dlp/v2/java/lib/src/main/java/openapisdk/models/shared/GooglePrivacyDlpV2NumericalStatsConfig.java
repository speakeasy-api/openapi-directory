package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2NumericalStatsConfig
 * Compute numerical stats over an individual column, including min, max, and quantiles.
**/
public class GooglePrivacyDlpV2NumericalStatsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GooglePrivacyDlpV2FieldId field;
    public GooglePrivacyDlpV2NumericalStatsConfig withField(GooglePrivacyDlpV2FieldId field) {
        this.field = field;
        return this;
    }
}