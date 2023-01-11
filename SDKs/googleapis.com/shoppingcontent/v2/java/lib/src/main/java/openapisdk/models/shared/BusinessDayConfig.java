package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BusinessDayConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessDays")
    public String[] businessDays;
    public BusinessDayConfig withBusinessDays(String[] businessDays) {
        this.businessDays = businessDays;
        return this;
    }
}