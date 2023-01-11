package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDateLimits
 * Limits for date Field type.
**/
public class GoogleAppsDriveLabelsV2betaDateLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public GoogleTypeDate maxValue;
    public GoogleAppsDriveLabelsV2betaDateLimits withMaxValue(GoogleTypeDate maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public GoogleTypeDate minValue;
    public GoogleAppsDriveLabelsV2betaDateLimits withMinValue(GoogleTypeDate minValue) {
        this.minValue = minValue;
        return this;
    }
}