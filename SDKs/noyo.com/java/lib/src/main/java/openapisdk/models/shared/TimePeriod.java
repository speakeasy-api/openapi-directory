package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TimePeriod {
    @JsonProperty("amount")
    public Integer amount;
    public TimePeriod withAmount(Integer amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("unit")
    public TimePeriodUnitEnum unit;
    public TimePeriod withUnit(TimePeriodUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}