package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Value
 * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
**/
public class GooglePrivacyDlpV2Value {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanValue")
    public Boolean booleanValue;
    public GooglePrivacyDlpV2Value withBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateValue")
    public GoogleTypeDate dateValue;
    public GooglePrivacyDlpV2Value withDateValue(GoogleTypeDate dateValue) {
        this.dateValue = dateValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeekValue")
    public GooglePrivacyDlpV2ValueDayOfWeekValueEnum dayOfWeekValue;
    public GooglePrivacyDlpV2Value withDayOfWeekValue(GooglePrivacyDlpV2ValueDayOfWeekValueEnum dayOfWeekValue) {
        this.dayOfWeekValue = dayOfWeekValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floatValue")
    public Double floatValue;
    public GooglePrivacyDlpV2Value withFloatValue(Double floatValue) {
        this.floatValue = floatValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerValue")
    public String integerValue;
    public GooglePrivacyDlpV2Value withIntegerValue(String integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public GooglePrivacyDlpV2Value withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeValue")
    public GoogleTypeTimeOfDay timeValue;
    public GooglePrivacyDlpV2Value withTimeValue(GoogleTypeTimeOfDay timeValue) {
        this.timeValue = timeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampValue")
    public String timestampValue;
    public GooglePrivacyDlpV2Value withTimestampValue(String timestampValue) {
        this.timestampValue = timestampValue;
        return this;
    }
}