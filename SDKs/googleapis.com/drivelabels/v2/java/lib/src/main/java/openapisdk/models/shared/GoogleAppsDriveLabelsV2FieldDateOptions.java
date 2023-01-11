package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldDateOptions
 * Options for the date field type.
**/
public class GoogleAppsDriveLabelsV2FieldDateOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFormat")
    public String dateFormat;
    public GoogleAppsDriveLabelsV2FieldDateOptions withDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateFormatType")
    public GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum dateFormatType;
    public GoogleAppsDriveLabelsV2FieldDateOptions withDateFormatType(GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum dateFormatType) {
        this.dateFormatType = dateFormatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public GoogleTypeDate maxValue;
    public GoogleAppsDriveLabelsV2FieldDateOptions withMaxValue(GoogleTypeDate maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public GoogleTypeDate minValue;
    public GoogleAppsDriveLabelsV2FieldDateOptions withMinValue(GoogleTypeDate minValue) {
        this.minValue = minValue;
        return this;
    }
}