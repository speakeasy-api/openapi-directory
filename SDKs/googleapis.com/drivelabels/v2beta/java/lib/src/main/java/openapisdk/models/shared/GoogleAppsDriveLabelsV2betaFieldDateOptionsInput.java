package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldDateOptionsInput
 * Options for the date field type.
**/
public class GoogleAppsDriveLabelsV2betaFieldDateOptionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFormatType")
    public GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum dateFormatType;
    public GoogleAppsDriveLabelsV2betaFieldDateOptionsInput withDateFormatType(GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum dateFormatType) {
        this.dateFormatType = dateFormatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public GoogleTypeDate maxValue;
    public GoogleAppsDriveLabelsV2betaFieldDateOptionsInput withMaxValue(GoogleTypeDate maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public GoogleTypeDate minValue;
    public GoogleAppsDriveLabelsV2betaFieldDateOptionsInput withMinValue(GoogleTypeDate minValue) {
        this.minValue = minValue;
        return this;
    }
}