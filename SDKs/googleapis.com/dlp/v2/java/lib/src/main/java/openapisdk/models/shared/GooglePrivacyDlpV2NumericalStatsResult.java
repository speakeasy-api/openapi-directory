package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2NumericalStatsResult
 * Result of the numerical stats computation.
**/
public class GooglePrivacyDlpV2NumericalStatsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public GooglePrivacyDlpV2Value maxValue;
    public GooglePrivacyDlpV2NumericalStatsResult withMaxValue(GooglePrivacyDlpV2Value maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public GooglePrivacyDlpV2Value minValue;
    public GooglePrivacyDlpV2NumericalStatsResult withMinValue(GooglePrivacyDlpV2Value minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantileValues")
    public GooglePrivacyDlpV2Value[] quantileValues;
    public GooglePrivacyDlpV2NumericalStatsResult withQuantileValues(GooglePrivacyDlpV2Value[] quantileValues) {
        this.quantileValues = quantileValues;
        return this;
    }
}