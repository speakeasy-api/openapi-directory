package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldDateOptions
 * Options for the date field type.
**/
public class GoogleAppsDriveLabelsV2betaFieldDateOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFormat")
    public String dateFormat;
    public GoogleAppsDriveLabelsV2betaFieldDateOptions withDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFormatType")
    public GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum dateFormatType;
    public GoogleAppsDriveLabelsV2betaFieldDateOptions withDateFormatType(GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum dateFormatType) {
        this.dateFormatType = dateFormatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public GoogleTypeDate maxValue;
    public GoogleAppsDriveLabelsV2betaFieldDateOptions withMaxValue(GoogleTypeDate maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public GoogleTypeDate minValue;
    public GoogleAppsDriveLabelsV2betaFieldDateOptions withMinValue(GoogleTypeDate minValue) {
        this.minValue = minValue;
        return this;
    }
}