package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldIntegerOptions
 * Options for the Integer field type.
**/
public class GoogleAppsDriveLabelsV2FieldIntegerOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public String maxValue;
    public GoogleAppsDriveLabelsV2FieldIntegerOptions withMaxValue(String maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public String minValue;
    public GoogleAppsDriveLabelsV2FieldIntegerOptions withMinValue(String minValue) {
        this.minValue = minValue;
        return this;
    }
}