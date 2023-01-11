package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ReportValue
 * A single report value.
**/
public class GoogleCloudChannelV1ReportValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTimeValue")
    public GoogleTypeDateTime dateTimeValue;
    public GoogleCloudChannelV1ReportValue withDateTimeValue(GoogleTypeDateTime dateTimeValue) {
        this.dateTimeValue = dateTimeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateValue")
    public GoogleTypeDate dateValue;
    public GoogleCloudChannelV1ReportValue withDateValue(GoogleTypeDate dateValue) {
        this.dateValue = dateValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("decimalValue")
    public GoogleTypeDecimal decimalValue;
    public GoogleCloudChannelV1ReportValue withDecimalValue(GoogleTypeDecimal decimalValue) {
        this.decimalValue = decimalValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intValue")
    public String intValue;
    public GoogleCloudChannelV1ReportValue withIntValue(String intValue) {
        this.intValue = intValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moneyValue")
    public GoogleTypeMoney moneyValue;
    public GoogleCloudChannelV1ReportValue withMoneyValue(GoogleTypeMoney moneyValue) {
        this.moneyValue = moneyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public GoogleCloudChannelV1ReportValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}